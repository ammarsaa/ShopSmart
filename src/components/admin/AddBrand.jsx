import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './style.css'

function AddBrand() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        Add Brand
      </Button>

      <Modal show={show} onHide={handleClose} centered>

        <Modal.Body className='d-flex align-items-center justify-content-center'>
          <form className="form">
            <p className="title">Brand </p>
            <p className="message">Add Brand.</p>
            <div className="flex">
              <label className='w-100'>
                <input required="" placeholder="" type="text" className="input" />
                <span>Brand Name</span>
              </label>
            </div>
            <label>
              <input required="" placeholder="" type="file" className='my-3' style={{
                backgroundColor: 'black',
                color: '#fff'
              }} />
              <span className='text-success'>Choose Brand Photo</span>
            </label>
            <button className="submit">Add Brand</button>
          </form>

        </Modal.Body>

      </Modal>
    </>
  );
}

export default AddBrand;