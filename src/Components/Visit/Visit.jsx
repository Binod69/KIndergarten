import { CiLocationOn } from 'react-icons/ci';
import { BiPhoneCall } from 'react-icons/bi';
import {
  AiOutlineInstagram,
  AiOutlineGoogle,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePushpin,
} from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
const Visit = () => {
  return (
    <div className="container py-4 visit">
      <div className="row">
        <div className="col-lg-6">
          <figure>
            <img className="w-100" src="/assets/contact.svg" alt="" />
          </figure>
          <div className="d-lg-flex ">
            <div>
              <p className="location">
                <CiLocationOn />: Ramailo Gau,Kakarvitta-06,Jhapa,Nepal
              </p>
              <div className="socialIcons">
                <FiFacebook className=" borders" size={25} />
                <AiOutlineInstagram size={25} className="mx-3 borders " />
                <AiOutlineGoogle size={25} className="borders" />
              </div>
            </div>
            <ul className="right py-3">
              <li>
                <a href="tel:+977 0987654321">
                  <BiPhoneCall className="me-2" /> +977 0987654321
                </a>
              </li>
              <li>
                <a href="tel:+977 0987654321">
                  <AiOutlineWhatsApp className="me-2" />
                  +977 0987654321
                </a>
              </li>
              <li>
                <a href="mailto: info@canvas.com">
                  <AiOutlineMail className="me-2" /> info@canvas.com
                </a>
              </li>
              <li>
                <a href="http://canvaskindergarten.com">
                  <AiOutlinePushpin className="me-2" />
                  canvaskindergarten.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 forms">
          <h3 className="py-3">Come and visit us.</h3>
          <p>
            Tell us a little bit about your family to get started. Come learn
            about the Scole experience!
          </p>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                First Name
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputAddress" />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputAddress2" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="inputAddress2"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState" className="form-label">
                Select Program
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Toddler</option>
                <option>Pre-School</option>
                <option>Kinder Garten</option>
                <option>Pre-Kinder Garten</option>
                <option>Others</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputAddress2" className="form-label">
                Date - Time
              </label>
              <input type="datetime-local" className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Location
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Visit;
