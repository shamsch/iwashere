const AddYourName = () => {
	return (
		<div>
			<div className='flex items-center justify-center mt-5'>
				<div class='w-full max-w-xs'>
					<h1 className='text-center text-lg block text-gray-700 font-bold mb-2'>
						Add Your Name
					</h1>
					<form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
						<div class='mb-4'>
							<label
								class='block text-gray-700 text-sm font-bold mb-2'
								for='username'>
								Name
							</label>
							<input
								class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='username'
								type='text'
								placeholder='Username'
							/>
						</div>

						<div class='flex items-center justify-between'>
							<button
								class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
								type='button'>
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
