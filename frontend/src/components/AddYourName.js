import { useState } from "react";

const AddYourName = ({handleName}) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleName({name});
    };

	return (
		<div>
			<div className='flex items-center justify-center mt-5'>
				<div className='w-full max-w-xs'>
					<h1 className='text-center text-lg block text-gray-700 font-bold mb-2'>
						Add Your Name
					</h1>
					<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='username'>
								Name
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='username'
								type='text'
								placeholder='Username'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className='flex items-center justify-between'>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='button' onClick={handleSubmit}>
								Add
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddYourName;
