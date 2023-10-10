import { useState, useEffect } from "react";
import cv from '../assets/Abdullah Murtaza.pdf'

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <div className="col-12">
        <div className="newsletter-bx wow slideInUp">
          <div className="row">
            <div className="col-md-6">
              <div className="align-items-center justify-content-center d-flex text-center">
              <h3 className="mt-md-3 mb-3 mb-md-0">Acquire my Resume</h3>
              </div>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx text-center align-items-center justify-content-center d-flex">
                  <a className="btn" href={cv} target="_blank" rel="noreferrer">Download</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
