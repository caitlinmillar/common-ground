import React from 'react';
import 'mdb-ui-kit/css/mdb.min.css';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-body-tertiary text-center">
                {/* Grid container */}
                <div className="container p-4">
                    <section className="">
                        <form action="">
                            {/*Grid row*/}
                            <div className="row d-flex justify-content-center align-items-center">
                                {/*Grid column*/}
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-md-5 col-12">
                                    {/* Email input */}
                                    <div data-mdb-input-init="" className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="form5Example24"
                                            className="form-control"
                                        />
                                        <label className="form-label" htmlFor="form5Example24">
                                            Email address
                                        </label>
                                    </div>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-auto">
                                    {/* Submit button */}
                                    <button
                                        data-mdb-ripple-init=""
                                        type="submit"
                                        className="btn btn-outline mb-4 btn-icon-center" // Add the class for centering
                                    >
                                        <span className="me-2">Subscribe</span>
                                        <i className="fas fa-paper-plane" />
                                    </button>
                                </div>
                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                        </form>
                    </section>
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2020 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                        MDBootstrap.com
                    </a>
                </div>
                <div className="container p-4 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1 btn-icon-center" // Add the class for centering
                            style={{ backgroundColor: "#3b5998", display: 'flex'}}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-facebook" />
                        </a>
                        {/* Twitter */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1 btn-icon-center" // Add the class for centering
                            style={{ backgroundColor: "#55acee", display: 'flex' }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        {/* Google */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1 btn-icon-center" // Add the class for centering
                            style={{ backgroundColor: "#dd4b39", display: 'flex' }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-google" />
                        </a>
                        {/* Instagram */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1 btn-icon-center" // Add the class for centering
                            style={{ backgroundColor: "#ac2bac", display: 'flex' }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        {/* Linkedin */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1 btn-icon-center" // Add the class for centering
                            style={{ backgroundColor: "#0082ca", display: 'flex' }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        {/* Github */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1 btn-icon-center" // Add the class for centering
                            style={{ backgroundColor: "#333333", display: 'flex' }}
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </>
    );
}
