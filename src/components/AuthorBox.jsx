import React from 'react';

const AuthorBox = (props) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Author Name</th>
                        <th scope="col">Book Title</th>
                        <th scope="col">Release Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.author.title}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default AuthorBox;