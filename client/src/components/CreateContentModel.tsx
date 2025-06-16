import axios from "axios";
import { BACKEND_URL } from "../Config";
import { Button } from "./Button";
import { CrossIcon } from "./CrossIcon";
import { Input } from "./Input";
import { useRef, useState } from "react";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}

type CreateContentModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    if (!title || !link) {
      alert("Please enter both title and link.");
      return;
    }

    try {
      await axios.post(`${BACKEND_URL}/api/v1/user/content`, {
        link,
        title,
        type
      }, {
        headers: {
          "Authorization": localStorage.getItem("token") || ""
        }
      });

      onClose();
    } catch (error) {
      alert("Failed to add content. Please try again.");
      console.error(error);
    }
  }

  return (
    <>
      <div>
        {open && (
          <div>
            {/* Overlay */}
            <div className="w-screen h-screen bg-slate-400 fixed top-0 left-0 opacity-60" />

            {/* Modal */}
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
              <div className="bg-white opacity-100 p-6 rounded shadow-xl relative w-[90%] max-w-md">
                {/* Close button */}
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>

                {/* Inputs */}
                <Input reference={titleRef} placeholder="Title" />
                <Input reference={linkRef} placeholder="Link" />

                {/* Type Selection */}
                <div>
                  <h1 className="text-center font-semibold mt-2">Type</h1>
                  <div className="flex gap-2 justify-center py-2">
                    <Button
                      text="Youtube"
                      variant={type === ContentType.Youtube ? "primary" : "secondary"}
                      onClick={() => setType(ContentType.Youtube)}
                    />
                    <Button
                      text="Twitter"
                      variant={type === ContentType.Twitter ? "primary" : "secondary"}
                      onClick={() => setType(ContentType.Twitter)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-4">
                  <Button onClick={addContent} variant="primary" text="Submit" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
