import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./Managemeds.css";
import { Link } from "react-router-dom";


const Managemeds = () => {
	return (
			<div className='manage-meds p-4 tc'>
				<div className=' header d-flex justify-content-between mb-5'>
					<h3 className='tc mb-3'>Manage Meds!!</h3>
					<Link to={'/add'} className='btn btn-success'>Add Medicine</Link>
				</div>
				<h3>Manage Meds!!</h3>
				<Table className='striped bordered hover mb-3' >
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Medicine Name</th>
          <th>description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>
          <td>Panadol</td>
          <td>For Headache pain </td>
          <td>
          	<Button className='btn btn-sm btn-danger'>Delete</Button>
          	<Link to={'/update'} className='btn btn-sm btn-primar mx-2'>Update</Link>
          	<Link to={'/5'} className='btn btn-sm btn-info'>View</Link>
          </td>
        </tr>
         <tr>
          <td>2</td>
          <td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>
          <td>Augmentin</td>
          <td>short term treatment of infections in different parts of the body</td>
          <td>
            <Button className='btn btn-sm btn-danger'>Delete</Button>
            <Link to={'/update'} className='btn btn-sm btn-primar mx-2'>Update</Link>
            <Link to={'/5'} className='btn btn-sm btn-info'>View</Link>
          </td>
        </tr>
         <tr>
          <td>3</td>
          <td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>
          <td>Catafast</td>
          <td>sed to reduce inflammation and pain in conditions such as migraine</td>
          <td>
            <Button className='btn btn-sm btn-danger'>Delete</Button>
            <Link to={'/update'} className='btn btn-sm btn-primar mx-2'>Update</Link>
            <Link to={'/5'} className='btn btn-sm btn-info'>View</Link>
          </td>
        </tr>
         <tr>
          <td>4</td>
          <td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>
          <td>Adol</td>
          <td>This combination medication is used to relieve moderate to severe pain</td>
          <td>
            <Button className='btn btn-sm btn-danger'>Delete</Button>
            <Link to={'/update'} className='btn btn-sm btn-primar mx-2'>Update</Link>
            <Link to={'/5'} className='btn btn-sm btn-info'>View</Link>
          </td>
        </tr>
         <tr>
          <td>5</td>
          <td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>
          <td>zisrocin</td>
          <td>used in the treatment of pneumonia, Streptococcus infections.</td>
          <td>
            <Button className='btn btn-sm btn-danger'>Delete</Button>
            <Link to={'/update'} className='btn btn-sm btn-primar mx-2'>Update</Link>
            <Link to={'/5'} className='btn btn-sm btn-info'>View</Link>
          </td>
        </tr>
         <tr>
          <td>6</td>
          <td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>
          <td>Doliprane</td>
          <td>Doliprane Tablet is a medicine used reduce fever and relieve pain.</td>
          <td>
            <Button className='btn btn-sm btn-danger'>Delete</Button>
            <Link to={'/update'} className='btn btn-sm btn-primar mx-2'>Update</Link>
            <Link to={'/5'} className='btn btn-sm btn-info'>View</Link>
          </td>
        </tr>
         <tr>
          <td>7</td>
          <td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>
          <td>Hibiotic</td>
          <td>used in the treatment of bacterial rhinosinusitis</td>
          <td>
            <Button className='btn btn-sm btn-danger'>Delete</Button>
            <Link to={'/update'} className='btn btn-sm btn-primar mx-2'>Update</Link>
            <Link to={'/5'} className='btn btn-sm btn-info'>View</Link>
          </td>
        </tr>
         <tr>
          <td>8</td>
          <td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>
          <td>Genuphil</td>
          <td>maintaining the normal structure of the articular cartilage</td>
          <td>
            <Button className='btn btn-sm btn-danger'>Delete</Button>
            <Link to={'/update'} className='btn btn-sm btn-primar mx-2'>Update</Link>
            <Link to={'/5'} className='btn btn-sm btn-info'>View</Link>
          </td>
        </tr>
      </tbody>
    </Table>
			</div>
		)
}
export default Managemeds;