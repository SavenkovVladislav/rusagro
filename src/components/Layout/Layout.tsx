import React from 'react'

import { Box } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = () => {
	return (
		<>
			<Header />
			<Box>
				<Outlet />
			</Box>
		</>
	)
}

export default Layout
