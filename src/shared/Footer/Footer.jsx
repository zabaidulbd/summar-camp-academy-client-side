

const Footer = () => {
    return (
        <footer className="footer px-10 py-10 border-t bg-pink-400 text-base-content border-base-300">
            <div className="items-center grid-flow-col">
                <img className="w-36 rounded-full" src="https://img.freepik.com/free-vector/gradient-alligator-logo-design_23-2149921534.jpg?w=740&t=st=1686131201~exp=1686131801~hmac=3550dbdfa34090a0ec741fac4802ca1ddf43c1d8b0ffa0cb6797b3672f478e1c" alt="" />
                <div>
                    <p className="ms-3"><span className="font-bold text-2xl text-white">Sports Academy</span><br /><span>Dhanmondi, Dhaka-1212</span></p>
                    <p className="">Copyright © 2023 - All right reserved</p>
                </div>

            </div>

            <div>
                <h2 className="font-bold text-3xl text-white mb-1">Contact Us</h2>
                <p className="font-bold">Mobile: 0198-3569825</p>
                <p className="font-bold">email: sports@gmail.com</p>
            </div>

            <div className="md:place-self-center md:justify-self-end">

                <span className="font-bold text-white text-3xl"> Sign-Up for Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-error absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;