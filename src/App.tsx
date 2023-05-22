import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { ChakraProvider, extendTheme, Select } from '@chakra-ui/react'

import Layout from './components/Layout/Layout'
import Field from './pages/Field/Field'
import Sidebar from './components/Sidebar/Sidebar'
import TableComponent from './components/Table/TableComponent'
import SelectComponent from './components/Select/SelectComponent'

const theme = extendTheme({
	colors: {
		primaryGreen: {
			100: '#5e992f',
			200: '#5e992f',
			300: '#5e992f',
			400: '#5e992f',
			500: '#5e992f',
			600: '#5e992f',
			700: '#5e992f',
		},
	},
	components: {
		/* BUTTON */
		Button: {
			variants: {
				primary: {
					height: '42px',
					bg: '#5e992f',
					color: '#ffffff',
					disabled: '#d0d0d0',
					_active: { bg: '#4e8027' },
					fontSize: '14px',
					fontWeight: '500',
					fontFamily: 'Poppins, sans-serif',
				},
				disabled: {
					height: '32px',
					width: '158px',
					bg: '#F8F8F8',
					color: '#D0D0D0',
					borderWidth: '1px',
					borderStyle: 'solid',
					borderColor: '#D0D0D0',
					fontSize: '14px',
					fontWeight: '500',
					fontFamily: 'Poppins, sans-serif',
				},
			},
		},
		/* TEXT*/
		Text: {
			variants: {
				title1: {
					fontSize: '24px',
					fontWeight: '600',
					fontFamily: 'Poppins, sans-serif',
					color: '#000000',
				},
				title2: {
					fontSize: '18px',
					fontWeight: '600',
					fontFamily: 'Poppins, sans-serif',
					color: '#000000',
				},
				title3: {
					fontSize: '16px',
					fontWeight: '600',
					fontFamily: 'Poppins, sans-serif',
					color: '#000000',
				},
				body: {
					fontSize: '14px',
					fontWeight: '400',
					fontFamily: 'Poppins, sans-serif',
					color: '#000000',
				},
			},
		},
	},
})

function App() {
	return (
		// <Routes>
		// 	<ChakraProvider>
		// 		<Route element={<Layout />}>
		// 			<Route path='/' element={<Field />} />
		// 		</Route>
		// 	</ChakraProvider>
		// </Routes>
		<>
			<ChakraProvider theme={theme}>
				<SelectComponent />
			</ChakraProvider>
		</>
	)
}

export default App
