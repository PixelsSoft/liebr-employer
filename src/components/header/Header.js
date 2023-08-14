import React from 'react'
import { Images } from '../../Constant/Constant'
import './Header.css'
import moment from 'moment/moment'
export default function Header() {
    return (
        <div><nav class="navbar navbar-expand-lg bg-red">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={Images.whiteLogo} alt="Logo" class="img-responsive w-50" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav d-flex w-100">
                        <li class="nav-item px-1 mx-3 li-navbar">
                            <a class="nav-link text-white active fw-semibold" aria-current="page" href="/DashBoard">Dashboard</a>
                        </li>
                        <li class="nav-item px-1 mx-3 li-navbar">
                            <a class="nav-link text-white fw-semibold" href={`/planning?on=${moment().format("yyyy-MM-DD")}`}>Planning</a>
                        </li>
                        <li class="nav-item px-1 mx-3 li-navbar">
                            <a class="nav-link text-white fw-semibold" href="/Projects">Projects</a>
                        </li>
                        <li class="nav-item px-1 mx-3 li-navbar">
                            <a class="nav-link text-white fw-semibold" href="/Checkout">Checkout</a>
                        </li>
                        <li class="nav-item px-1 mx-3 li-navbar">
                            <a class="nav-link text-white fw-semibold" href="/flexPools">Flex Pools</a>
                        </li>
                    </ul>
                </div>
                <div class="w-25">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item dropdown w-100">
                            <a class="nav-link dropdown-toggle text-center text-white fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  </div>
    )
}
