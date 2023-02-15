import { useForm } from 'react-hook-form';

function FormSection() {
	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		console.log(data);
	};
	return (
		<div className="border-2 border-solid border-triplee py-[45px] px-[50px]">
			<h2 className="mb-10 text-3xl font-semibold leading-10 text-cobalto">
				Contact Us
			</h2>
			<div className="my-0 mb-0 ml-auto mr-0 flex w-full flex-col items-stretch">
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
					<label
						for="Name"
						className="mb-3 text-xs font-medium uppercase leading-[1px]"
					>
						Name
					</label>
					<input
						type="text"
						name="Name"
						placeholder="Enter your name"
						id="Name"
						className="mb-6 h-[38px] w-full border-[1px] border-solid border-[#e4e4e4] py-[21px] px-5 text-sm leading-7 text-[#333333]"
						{...register('name', { required: true })}
					/>
					<label
						for="Address"
						className="mb-3 text-xs font-medium uppercase leading-[1px]"
					>
						Email Address
					</label>
					<input
						type="email"
						name="Address"
						placeholder="Enter your email"
						id="Address"
						className="mb-6 h-[38px] w-full border-[1px] border-solid border-[#e4e4e4] py-[21px] px-5 text-sm leading-7 text-[#333333]"
						{...register('email', { required: true })}
					/>
					<label
						for="Message"
						className="mb-3 text-xs font-medium uppercase leading-[1px]"
					>
						Message
					</label>
					<textarea
						name="Message"
						placeholder="Message..."
						id="Message"
						className="mb-6 h-[200px] border-[1px] border-solid border-[#e4e4e4] py-[21px] px-5 pt-3 text-sm leading-4"
						{...register('message', { required: true, maxLength: 5000 })}
					></textarea>
					<input
						type="submit"
						value="Submit"
						className="inline-block cursor-pointer bg-cobalto py-3 px-6 uppercase leading-5 tracking-[2px] text-white"
					/>
				</form>
			</div>
		</div>
	);
}

export default FormSection;
