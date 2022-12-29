import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb-react-ui-kit";
import logo from './assets/circles.png';

const Footer = () => {
    return (
        <MDBFooter color="unique-color-dark" className="font-small pt-2 mt-2 text-white " style={{
            backgroundColor: "rgb(28, 35, 49)"
            
        }}>
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                    <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">
                            <img src={logo} alt="Book Store App" height="50px" />
                            <strong>Book-IT</strong>
                        </h6>
                        <p>
                            Book-IT is an online React web application where the customer can purchase books online.
                            Through this book store the users can search for a book by its title and
                            later can add to the shopping cart and finally purchase using credit card transaction.
                        </p>
                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none" />


                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold"><strong>Contact</strong></h6>
                        <p>
                            <i className="fa fa-envelope mx-2" />khaledelgamely50@gmail.com
                        </p>
                        <p>
                            <i className="fa fa-phone mx-2" /> 01552600743</p>
                        <p>
                            <i className="fa fa-home mx-2" />Egypt, Cairo
                        </p>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="d-flex align-items-center">
                    <MDBCol md="8" lg="8">
                        <p className="text-center text-md-left text-secondary">
                            &copy; {new Date().getFullYear()} Made by
                            <a href="" style={{ textDecoration: "none", color: "white" }}> Khaled Elgamely</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="4" lg="4" className="ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 text-white" href="https://github.com/kahledelgamely">
                                        <i className="fab fa-github" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-sm rgba-white-slight mx-1 text-white" href='https://www.linkedin.com/in/khalid-elgamely-874470242/'>
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;