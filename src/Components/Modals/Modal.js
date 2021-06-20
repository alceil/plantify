import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}



export default function Modal({name,url, open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <div className="modalTitle">
          <h1>{name}</h1>
          </div>

       <img className="imageStyle" src={url} width="100" height="100"></img>
          <p>Sunflowers are thought to have been domesticated 3000–5000 years ago by Native Americans who would use them primarily as a source for edible seeds. They were then introduced to Europe in the early 16th century and made their way to Russia. In Russia, where oilseed cultivators were located, these flowers were developed and grown on an industrial scale. Russia then reintroduced this oilseed cultivation process to North America in the mid-20th century; North America began their commercial era of sunflower production and breeding.[12] New breeds of the Helianthus spp. began to become more prominent in new geographical areas.</p>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>
  )
    // document.getElementById('portal')
  
}