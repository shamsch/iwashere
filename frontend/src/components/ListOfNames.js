const ListOfNames = ({ allNames }) => {
	return (
		<div>
            <h1 className='text-center text-lg block text-gray-700 font-bold mb-2'>
                The Last 5 People Who Were Here
            </h1>
			<div className='flex justify-center'>
				<ul className='bg-white rounded-lg border border-gray-200 w-96 text-gray-900'>
					{allNames.map((name, id) => (
						<li key={id} className='flex items-center justify-between p-4 border-b border-gray-200'>
							<span>{name}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ListOfNames;
