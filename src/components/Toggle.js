import React from "react";

function Toggle({ toggle, setToggle, tabName1, tabName2 }) {
	return (
		<div>
			<div className='border-b border-gray_light mt-8  h-[29px] '>
				{!toggle ? (
					<div className='flex gap-6'>
						<p className='mb-2 font-reg text-sm border-b pb-2 border-black cursor-pointer'>
							{tabName1}
						</p>
						<p
							onClick={() => setToggle((toggle) => !toggle)}
							className='mb-2 font-reg text-sm cursor-pointer'>
							{tabName2}
						</p>
					</div>
				) : (
					<div className='flex gap-6'>
						<p
							onClick={() => setToggle((toggle) => !toggle)}
							className='mb-2 font-reg text-sm cursor-pointer'>
							{tabName1}
						</p>
						<p className='mb-2 font-reg text-sm border-b pb-2 border-black cursor-pointer'>
							{tabName2}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Toggle;
