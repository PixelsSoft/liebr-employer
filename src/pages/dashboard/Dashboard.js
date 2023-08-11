import React, { Fragment } from 'react'
import './Custom.css'


import PageLayout from '../../layouts/PageLayout'
import { Images } from '../../Constant/Constant'

export default function Dashboard() {
    return (
        <PageLayout>
            {/* <!-- dashboard --> */}


            <div className="hero-banner ">

                <div
                    className="container"
                >
                    <h1 className="text-white text-center py-5">Hi El, vind alle mensen die je nodig hebt!</h1>
                </div>


                <div className="container"
                // style={{ marginTop: "-160px" }}
                >
                    <div className="row">
                        <div className="col-md-12 px-4">
                            <div className="sec-01">
                                <p className="top-para text-white">Mijn shifts</p>
                            </div>
                            <div className="row checkoutsection p-3">
                                <div className="col-md-6">
                                    <div className="img-sec d-flex align-items-center">
                                        <img src={Images.send} alt="" className="img-responsive dash-icon" />
                                        <div className="childcontent mx-3">
                                            <div className="heading">
                                                <h3>Plan je shifts </h3>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="paragraphtext">
                                        <p>Creëer nieuwe shifts en maak ze aantrekkelijk voor FreeFlexers om te solliciteren. Bekijk de profielen
                                            van de FreeFlexers die gereageerd hebben en accepteer de beste fit.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-end">
                                    <a href="#" className="anchortext">
                                        <i className="fas fa-less-than">{">"}</i>
                                    </a>
                                </div>
                                <div className="row py-3">
                                    {/* <!-- col --> */}
                                    <div className="col-md-4">
                                        <div className="img-sec d-flex align-items-center">
                                            <img src={Images.send} alt="" className="img-responsive dash-icon" />
                                            <div className="childcontent mx-3">
                                                <div className="heading">
                                                    <p className="dash-head"><span>Bekijk vervulde shifts</span> </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="paragraphtext">
                                            <p>Shifts met een groene status zijn vervuld. Bekijk ze om te zien welke FreeFlexers komen.</p>
                                        </div>
                                    </div>

                                    {/* <!-- col --> */}
                                    <div className="col-md-4">
                                        <div className="img-sec d-flex align-items-center">
                                            <img src={Images.send} alt="" className="img-responsive dash-icon" />
                                            <div className="childcontent mx-3">
                                                <div className="heading">
                                                    <p className="dash-head"><span>Bekijk vervulde shifts</span> </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="paragraphtext">
                                            <p>Shifts met een groene status zijn vervuld. Bekijk ze om te zien welke FreeFlexers komen.</p>
                                        </div>
                                    </div>

                                    {/* <!-- col --> */}
                                    <div className="col-md-4">
                                        <div className="img-sec d-flex align-items-center">
                                            <img src={Images.send} alt="" className="img-responsive dash-icon" />
                                            <div className="childcontent mx-3">
                                                <div className="heading">
                                                    <p className="dash-head"><span>Bekijk vervulde shifts</span> </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="paragraphtext">
                                            <p>Shifts met een groene status zijn vervuld. Bekijk ze om te zien welke FreeFlexers komen.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- second section --> */}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-12 px-4">
                            <div className="sec-01">
                                <p className="top-para text-danger">Mijn shifts</p>
                            </div>
                            <div className="row checkoutsection p-3">
                                <div className="col-md-6">
                                    <div className="img-sec d-flex align-items-center">
                                        <img src={Images.send} alt="" className="img-responsive dash-icon" />
                                        <div className="childcontent mx-3">
                                            <div className="heading">
                                                <h3>Plan je shifts </h3>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="paragraphtext">
                                        <p>Creëer nieuwe shifts en maak ze aantrekkelijk voor FreeFlexers om te solliciteren. Bekijk de profielen
                                            van de FreeFlexers die gereageerd hebben en accepteer de beste fit.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-end">
                                    <a href="#" className="anchortext">
                                        <i className="fas fa-less-than">{">"}</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Third section --> */}
                <div className="container mt-3">
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-6 px-4">
                            <div className="sec-01">
                                <p className="top-para text-danger">Mijn shifts</p>
                            </div>
                            <div className="row checkoutsection p-3">
                                <div className="col-md-10">
                                    <div className="img-sec d-flex align-items-center">
                                        <img src={Images.send} alt="" className="img-responsive dash-icon" />
                                        <div className="childcontent mx-3">
                                            <div className="heading">
                                                <h3>Plan je shifts </h3>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="paragraphtext">
                                        <p>Creëer nieuwe shifts en maak ze aantrekkelijk voor FreeFlexers om te solliciteren. Bekijk de profielen
                                            van de FreeFlexers die gereageerd hebben en accepteer de beste fit.</p>
                                    </div>
                                </div>
                                <div className="col-md-2 text-end">
                                    <a href="#" className="anchortext">
                                        <i className="fas fa-less-than">{">"}</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 px-4">
                            <div className="sec-01">
                                <p className="top-para text-danger">Mijn shifts</p>
                            </div>
                            <div className="row checkoutsection p-3">
                                <div className="col-md-10">
                                    <div className="img-sec d-flex align-items-center">
                                        <img src={Images.send} alt="" className="img-responsive dash-icon" />
                                        <div className="childcontent mx-3">
                                            <div className="heading">
                                                <h3>Plan je shifts </h3>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="paragraphtext">
                                        <p>Creëer nieuwe shifts en maak ze aantrekkelijk voor FreeFlexers om te solliciteren. Bekijk de profielen
                                            van de FreeFlexers die gereageerd hebben en accepteer de beste fit.</p>
                                    </div>
                                </div>
                                <div className="col-md-2 text-end">
                                    <a href="#" className="anchortext">
                                        <i className="fas fa-less-than">{">"}</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









        </PageLayout >
    )
}
