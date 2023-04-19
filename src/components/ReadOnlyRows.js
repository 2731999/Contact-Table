import React from 'react'

const ReadOnlyRows = ({ contact, handelEditClick, handelDeleteClick }) => {
    return (
        <tr className='trr'>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button type='button' onClick={(event) => handelEditClick(event, contact)}>
                    Edit
                </button>
                <button type='delete' onClick={() => handelDeleteClick(contact.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRows