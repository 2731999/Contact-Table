import React from 'react'

const EditableRow = ({ editFormData, handelEditFormChange, handelCancelClick }) => {
  return (
    <tr className='tre'>
        <td>
            <input
            type='text'
            required='required'
            placeholder='Enter a Name....'
            name='fullName'
            value={editFormData.fullName}
            onChange={handelEditFormChange}
            ></input>
        </td>
        <td>
        <input
            type='text'
            required='required'
            placeholder='Enter an Address....'
            name='address'
            value={editFormData.address}
            onChange={handelEditFormChange}
            ></input>
        </td>
        <td>
        <input
            type='text'
            required='required'
            placeholder='Enter a Phone number....'
            name='phoneNumber'
            value={editFormData.phoneNumber}
            onChange={handelEditFormChange}
            ></input>
        </td>
        <td>
        <input
            type='email'
            required='required'
            placeholder='Enter an Email....'
            name='email'
            value={editFormData.email}
            onChange={handelEditFormChange}
            ></input>
        </td>
        <td className='btn2'>
            <button type='submit'>Save</button>
            <button type='button' onClick={handelCancelClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default EditableRow