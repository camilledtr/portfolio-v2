import React from 'react'

const copyToClipboard = (value) => {
  navigator.clipboard.writeText(value)
}

const Footer = () => {
  const [hasBeenCopied, setHasBeenCopied] = React.useState(false)
  const [copyAnimation, setCopyAnimation] = React.useState(false)

  const handleCopyEmail = () => {
    copyToClipboard('camilledr10@gmail.com')
    setHasBeenCopied(true)
    setCopyAnimation(true)
    setTimeout(() => {
      setCopyAnimation(false)
    }, 1000)
  }

  return (
    <div className='footer'>
      <p className="copyright">© 2024 camilledtr. all rights reserved.</p>
      <div className='socials'>
        {copyAnimation && <div className='copied-message'>email copied!</div>}
        <button className={`email${hasBeenCopied ? ' copied' : ''}`} onClick={handleCopyEmail}>
          email me
        </button>
        <a href='https://github.com/camilledtr' target='_blank' rel='noreferrer noopener'>
          github
        </a>
      </div>
    </div>
  )
}

export default Footer