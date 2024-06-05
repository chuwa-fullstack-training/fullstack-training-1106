import React, {useState} from 'react';

const BirthdayRecords = () => {
    const [sortOption, setSortOption] = useState('name');
    const records = [
        {
            name: "Veronica Mize",
            dob: "11/29/2011"
        }, {
            name: "Cecilia Olsson",
            dob: "09/16/1992"
        }, {
            name: "Peter Parker",
            dob: "01/16/1992"
        }, {
            name: "Jimmy Shergil",
            dob: "12/12/2001"
        }, {
            name: "Alexander Alfred",
            dob: "02/09/1891"
        }, {
            name: "Janice Shroyer",
            dob: "12/01/1982"
        }, {
            name: "Ralph White",
            dob: "11/30/2011"
        }, {
            name: "Deborah T. Decker",
            dob: "10/31/1999"
        }
    ];

    const sortRecords = [...records].sort((a, b) => {
        if (sortOption === 'name'){
            return a.name.localeCompare(b.name);
        }
        else{
            return new Date(a.dob) - new Date(b.dob);
        }
    }
    );
    return (
        <div>
            <h1>Sort by</h1>
            <input type='radio' value='name'
            checked={sortOption === 'name'}
            onChange ={()=> setSortOption('name')}/>Name
            <input type='radio' value = 'age'
            checked={sortOption === 'age'}
            onChange={()=>setSortOption('age')}/>Age
            <table>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                </tr>
                {sortRecords.map((record, index) => (
                    <tr key ={index}>
                        <td>{record.name}</td>
                        <td>{record.dob}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default BirthdayRecords;