import { AiOutlineCaretRight, AiOutlineWhatsApp } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row  text-lg-center">
          <div className="col mt-4 my-lg-5">
            <h4>Features</h4>
            <ul>
              <li>
                <AiOutlineCaretRight size={10} className="me-lg-2" /> Help
                Center
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                Paid with Moblie
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                Status
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                Changelog
              </li>
            </ul>
          </div>
          <div className="col mt-4 my-lg-5">
            <h4>Support</h4>
            <ul>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" /> Home
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                About
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                FAQs
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                Contact
              </li>
            </ul>
          </div>
          <div className="col mt-4 my-lg-5">
            <h4>Trending</h4>
            <ul>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" /> Shop
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                Portfolio
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                Blog
              </li>
              <li>
                <AiOutlineCaretRight size={10} className="me-2" />
                Events
              </li>
            </ul>
          </div>
          <div className="col mt-4 my-lg-5">
            <h4>Open Hours</h4>
            <ul>
              <li>Monday - Saturday</li>
              <li>6:30 - 20:00</li>
              <li>Sunday Closed</li>
            </ul>
          </div>
          <div className="col mt-4 my-lg-5">
            <h4>Contact</h4>
            <ul>
              <li>795 Folsom Ave, Suite 600 San Francisco, CA 94107</li>
              <li>
                <a href="tel: +0 8547 632521">
                  <BiPhoneCall className="me-2" />
                  +(0) 8547 632521
                </a>
              </li>
              <li>
                <a href="tel: +0 8547 632521">
                  <AiOutlineWhatsApp className="me-2" /> +(0) 11 4752 1433
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
