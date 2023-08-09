import React from 'react'
import PageLayout from '../../layouts/PageLayout'

export default function FlexPool() {
    return (
        <PageLayout>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 ">
                        <h1>Flexpools van Liebr Holding B.V.</h1>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <a href="#" className="btn btn-red mx-1 ">Flexpool toevoegen</a>
                    </div>
                </div>

                <div className="row my-4 mt-5">
                    <div className="col-md-12">
                        <table className="table bg-danger showtabledata">
                            <tbody>
                                <tr className="py-5">
                                    <td className="px-4 pt-2">Bartending - abc <small style={{ fontsize: "10px" }}> 0 FreeFlexers</small></td>
                                    <td className="text-end">
                                        <a href="#" className="btn btnredoutlinetable">archiveer project</a>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}
