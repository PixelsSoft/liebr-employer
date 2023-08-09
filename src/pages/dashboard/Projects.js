import React from 'react'
import { useSelector } from 'react-redux'
import PageLayout from '../../layouts/PageLayout'

export default function Projects() {
    const language = useSelector( state => state?.utiltities?.Language )
    return (
        <PageLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 ">
                        <h1>Projects</h1>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <a href="#" className="btn btn-red mx-1">Create new project</a>
                        <a href="#" className="btn btn-red-outline mx-1">View Archive</a>
                    </div>
                </div>

                <div className="row my-4 mt-5">
                    <div className="col-md-12">
                        <table className="table bg-danger showtabledata">
                            <tbody>
                                <tr>
                                    <td className="px-4 pt-2">Liebr Holding BV / General</td>
                                    <td>1 function</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btnredoutlinetable">archiveer project</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 pt-2">Liebr Holding BV / General</td>
                                    <td>10 function</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btnredoutlinetable">archiveer project</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 pt-2">Liebr Holding BV / General</td>
                                    <td>21 function</td>
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
