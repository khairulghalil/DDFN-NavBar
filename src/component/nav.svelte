<script>
	import { onMount } from 'svelte';
	import { menus, sub_menus, expand, colorLink, colorSubLink } from './nav.js';

	let menus_value, sub_menus_value, expand_value;

	menus.subscribe(value => { menus_value = value; });
	sub_menus.subscribe(value => { sub_menus_value = value; });
	expand.subscribe(value => { expand_value = value; });

	onMount(() => {
		const showNavbar = (toggleId, navId, bodyId, headerId) => {
			const toggle = document.getElementById(toggleId),
				nav = document.getElementById(navId),
				bodypd = document.getElementById(bodyId),
				headerpd = document.getElementById(headerId),
				navhead = document.getElementById('nav_head'),
				navfootlogo = document.getElementById('nav_foot_logo'),
				navfootcap = document.getElementById('nav_foot_capital'),
				navprofiletitle = document.getElementById('user_title');

			if (toggle && nav && bodypd && headerpd) {
				toggle.addEventListener('click', () => {
					nav.classList.toggle('show');
					bodypd.classList.toggle('body-pd');
					headerpd.classList.toggle('body-pd');
					// navhead.classList.toggle('nav_header');
					navfootlogo.classList.toggle('d-none');
					navfootcap.classList.toggle('d-none');
					navprofiletitle.classList.toggle('d-none');

					document.body.classList.contains('body-pd') ? expand.set('true') : expand.set('false') 
				});
			}
		};

		showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

		const linkColor = document.querySelectorAll('.nav_link');
		const linkSubColor = document.querySelectorAll('.nav_list_body');
		const linkNavLink = document.querySelectorAll('.nav_link');
		const linkSubMenu = document.querySelectorAll('.sub_menu');

		linkNavLink.forEach((l) => {
			l.setAttribute('onmouseenter', 'show($(this).parent().attr("id"))'),
				l.setAttribute('onmouseleave', 'hide($(this).parent().attr("id"))');
		});
		linkSubMenu.forEach((l) => {
			l.setAttribute('onmouseenter', 'show($(this).parent().attr("id"))'),
				l.setAttribute('onmouseleave', 'hide($(this).parent().attr("id"))');
		});

		linkColor.forEach((l) => l.addEventListener('click', colorLink));
		linkSubColor.forEach((l) => l.addEventListener('click', colorSubLink));

		document.getElementById(menus_value).classList.add('active')
		if (sub_menus_value != '') {
			document.getElementById(sub_menus_value).classList.add('sub-active')
		}
	});
	
</script>

<!-- body -->
<body id="body-pd" class={ expand_value === 'true' ? 'nav-body body-pd' : 'nav-body' }>
	<header id="header" class={ expand_value === 'true' ? 'header body-pd' : 'header' }>
		<img class="collapse_icon" alt="" src="/img/collapse_icon.svg" id="header-toggle" />
		<div class="header_toggle" />
		<div class="row">
			<div class="header_img">
				<img class="ellipse-icon" alt="" src="/img/bell_icon.svg" />
			</div>
			<div class="header_img">
				<img class="ellipse-icon" alt="" src="/img/logout_icon.svg" />
			</div>
		</div>
	</header>
	<div class="l-navbar" id="nav-bar" class:show="{expand_value === 'true'}">
		<nav class="nav">
			<div>
				<!-- <a class="nav_logo toggle" id="header-toggle">
					<div id="nav_head" class={ expand_value === 'true' ? 'nav_header show' : '' }>
						<img class="ellipse-icon" alt="" src="/img/collapse_icon.svg" />
					</div>
				</a> -->
				<div class="nav_footer">
					<div id="nav_foot_logo" class={ expand_value === 'true' ? 'nav_foot' : 'nav_foot d-none' }>
						<img alt="" src="/img/fefifo_logo_sidebar.svg" width= 100px;/>
						<!-- <h4 class="mt-4">DDFN</h4>
						<p>(Digital Distributed Farms Network)</p> -->
					</div>
					<div id="nav_foot_capital" class={ expand_value === 'true' ? 'nav_foot_cap d-none' : 'nav_foot_cap' }>
						<img alt="" src="/img/fefifo_capital.svg"  width= 30px;/>
					</div>
				</div>
				<div class="row user_profile">
					<div class="user_img col-2">
						<img class="ellipse-icon" alt="" src="/img/nav_profile.png" width="40px" />
					</div>
					<div id="user_title" class={ expand_value === 'true' ? 'user_title col-10' : 'user_title col-10 d-none' }>
						<p>Welcome Khairul Ghalil</p>
						<span>Last Login: 16 Aug 2022</span>
					</div>
				</div>

				<div class="nav_list">
					<!-- ******** MENU ******** -->

					<!-- 
					To add menu, copy existing template and make sure 
					to put ID on parent div and every href inside the
					parent div.
					-->

					<!-- dashboard -->
					<div id="dashboard">
						<a href="{'/dashboard'}" id="dashboard_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_dashboard.svg" />
							<div class="row">
								<div class="col-10 nav_name">Dashboard</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<!-- <img alt="" src="/img/nav_arrow.svg" /> -->
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Dashboard</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
						</div>
					</div>

					<!-- crop_model -->
					<div id="crop_model">
						<a href="{'#'}" id="crop_model_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_crop_model.png" />
							<div class="row">
								<div class="col-10 nav_name">Crop Model</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Crop Model</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'/crop-model'}" id="crop_model_submenu1" class="nav_list_body">
								<div>View Crop Model</div>
							</a>
							<a href="{'/crop-model/draft'}" id="crop_model_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>

					<!-- sop -->
					<div id="sop">
						<a href="{'#'}" id="sop_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_sop.png" />
							<div class="row">
								<div class="col-10 nav_name">SOP</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">SOP</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="sop_submenu1" class="nav_list_body">
								<div>View SOP</div>
							</a>
							<a href="{'#'}" id="sop_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>

					<!-- farm -->
					<div id="farm">
						<a href="{'#'}" id="farm_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_farm.png" />
							<div class="row">
								<div class="col-10 nav_name">Farm</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Farm</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="farm_submenu1" class="nav_list_body">
								<div>View Farm</div>
							</a>
							<a href="{'#'}" id="farm_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>

					<!-- personnel_setup -->
					<div id="personnel_setup">
						<a href="{'#'}" id="personnel_setup_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_personnel_setup.png" />
							<div class="row">
								<div class="col-10 nav_name">Personnel Setup</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Personnel Setup</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="personnel_setup_submenu1" class="nav_list_body">
								<div>View Personnel Setup</div>
							</a>
							<a href="{'#'}" id="personnel_setup_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>

					<!-- agropreneur_fund -->
					<div id="agropreneur_fund">
						<a href="{'#'}" id="agropreneur_fund_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_agropreneur_fund.png" />
							<div class="row">
								<div class="col-10 nav_name">Fund Management</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Fund Management</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="agropreneur_fund_submenu1" class="nav_list_body">
								<div>View Fund Management</div>
							</a>
							<a href="{'#'}" id="agropreneur_fund_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>
					
					<!-- inventory -->
					<div id="inventory">
						<a href="{'#'}" id="inventory_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_inventory.png" />
							<div class="row">
								<div class="col-10 nav_name">Inventory</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Inventory</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="inventory_submenu1" class="nav_list_body">
								<div>View Inventory</div>
							</a>
							<a href="{'#'}" id="inventory_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>

					<!-- harvest_sales -->
					<div id="harvest_sales">
						<a href="{'#'}" id="harvest_sales_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_harvest_sales.png" />
							<div class="row">
								<div class="col-10 nav_name">Sales & Logistics</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Sales & Logistics</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="harvest_sales_submenu1" class="nav_list_body">
								<div>View Sales & Logistics</div>
							</a>
							<a href="{'#'}" id="harvest_sales_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>

					<!-- archived_records -->
					<div id="archived_records">
						<a href="{'#'}" id="archived_records_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_archive_records.png" />
							<div class="row">
								<div class="col-10 nav_name">Archived Records</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Archived Records</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="archived_records_submenu1" class="nav_list_body">
								<div>View Archived Records</div>
							</a>
							<a href="{'#'}" id="archived_records_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>

					<!-- archived_records -->
					<div id="archived_recordss">
						<a href="{'#'}" id="archived_recordss_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_archive_records.png" />
							<div class="row">
								<div class="col-10 nav_name">Archived Records</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Archived Records</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="archived_recordss_submenu1" class="nav_list_body">
								<div>View Archived Records</div>
							</a>
							<a href="{'#'}" id="archived_recordss_submenu2" class="nav_list_body">
								<div>Draft</div>
							</a>
							<a href="{'#'}" id="archived_recordss_submenu3" class="nav_list_body">
								<div>Draft</div>
							</a>
							<a href="{'#'}" id="archived_recordss_submenu4" class="nav_list_body">
								<div>Draft</div>
							</a>
						</div>
					</div>

					<!-- ******** END MENU ******** -->

					<!-- <div class="nav_footer">
						<div id="nav_foot_logo" class={ expand_value === 'true' ? 'nav_foot mt-4' : 'nav_foot mt-4 d-none' }>
							<img alt="" src="/img/fefifo_logo_sidebar.svg" />
							<h4 class="mt-4">DDFN</h4>
							<p>(Digital Distributed Farms Network)</p>
						</div>
						<div id="nav_foot_capital" class={ expand_value === 'true' ? 'nav_foot_cap mt-4 d-none' : 'nav_foot_cap mt-4' }>
							<img alt="" src="/img/fefifo_capital.svg" />
						</div>
					</div> -->
				</div>
			</div>
		</nav>
	</div>
</body>

<!-- style -->
<style>
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	:root {
		--header-height: 3rem;
		--nav-width: 68px;
		--first-color: blue;
		--first-color-light: #afa5d9;
		--white-color: #f7f6fb;
		--body-font: 'Nunito', sans-serif;
		--normal-font-size: 1rem;
		--z-fixed: 100;
	}
	*,
	::before,
	::after {
		box-sizing: border-box;
	}
	body {
		position: relative;
		margin: var(--header-height) 0 0 0;
		padding: 0 1rem;
		font-family: var(--body-font);
		font-size: var(--normal-font-size);
		transition: 0.5s;
	}
	@media screen and (min-width: 768px) {
		body {
			margin: calc(var(--header-height) + 1rem) 0 0 0;
			padding-left: calc(var(--nav-width) + 2rem);
		}
		.header {
			height: calc(var(--header-height) + 1rem);
			padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
		}
		.header_img {
			width: 40px;
			height: 40px;
		}
		.header_img img {
			width: 45px;
		}
		.l-navbar {
			left: 0;
			padding: 0rem 0 0 0;
		}
		.show {
			width: calc(var(--nav-width) + 156px);
		}
		.body-pd {
			padding-left: calc(var(--nav-width) + 188px);
		}
	}
</style>
