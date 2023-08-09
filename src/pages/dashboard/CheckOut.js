import React from 'react'
import { Images } from '../../Constant/Constant'
import PageLayout from '../../layouts/PageLayout'
import './Custom.css'

export default function CheckOut() {
    return (
        <PageLayout>


            <div class="container my-5">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Checkouts</h1>
                    </div>
                </div>

                <div class="row my-5 checkoutsection p-3">
                    <div class="col-md-12">
                        <div class="img-sec d-flex align-items-center">
                            <img src={Images.send} alt="" class="img-responsive bgicon" />
                            <div class="childcontent mx-3">
                                <div class="heading">
                                    <h3>It's still quiet now...</h3>
                                </div>
                                <div class="paragraphtext">
                                    <p>Once a FreeFlexer has checked out, you can check the time registration here.</p>
                                </div>
                            </div>
                        </div>
                        <div class="contect-sec">

                        </div>
                    </div>
                </div>

            </div>

        </PageLayout>
    )
}
