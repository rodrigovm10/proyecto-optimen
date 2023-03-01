function Login() {
	return (
		<div className="w-full py-[176px] px-[64px] font-monserrat">
			<div className="relative mt-[-72px] mr-auto ml-auto max-w-1440 pt-0">
				<div className="mr-auto mb-0 ml-auto w-[388px] max-w-full rounded-xl bg-white p-6 shadow-sombra2">
					<h1 className="mb-8 text-center text-2xl font-semibold">Login</h1>
					<form>
						<label
							for={'Email'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Email Address
						</label>
						<input
							id={'Email'}
							name={'Email'}
							type="email"
							placeholder="Enter Your Email Address"
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<label
							for={'Password'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Password
						</label>
						<input
							id={'Password'}
							for={'Password'}
							type="password"
							placeholder="Enter Your Password"
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<input
							id={'Submit'}
							name="Submit"
							type="submit"
							className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
