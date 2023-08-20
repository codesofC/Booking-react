import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mail-title">
            Save time, save money!
        </h1>
        <span className="mail-desc">Sign up and we'll send you the news </span>
        <div className="mail-input-container">
            <input type="email" name="" id="" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList