
import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModel'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
// Make sure the Sidebar component exists at this path, or update the path if necessary
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL } from '../Config'
import axios from 'axios'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const {contents, refresh} = useContent()

  useEffect(() => {
    refresh();
  }, [modalOpen ])


  return (
    <>
      <div>
        <Sidebar />
        <div className='p-2 ml-72 min-h-screen bg-gray-100 border-1'>
            <CreateContentModal open={modalOpen} onClose={() => {
              setModalOpen(false)
            }} />
            <div className='gap-2 flex justify-end'>
              <Button onClick={()=>{
                setModalOpen(true)
              }} variant="primary"  text="Add Content" startIcon={<PlusIcon /> }/>
              <Button onClick={async() => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
                }, {
                  headers: {
                    "Authorization" : localStorage.getItem("token")
                  }
                })
                const shareUrl = `http://localhost:5173/share/${response.data.hash}`
                alert(shareUrl)
              }} variant="secondary"  text="Share Brain" startIcon={<ShareIcon />}/>
            </div>
            <div className='flex gap-4 flex-wrap'>
              {contents.map(({type, link, title}) => <Card 
                type={type} 
                link={link} 
                title={title} 
              />)}
            </div>
          </div>
      </div>
    </>
  )
}

