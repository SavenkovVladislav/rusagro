import React from 'react'
import { Box, Flex, Text, Select, Checkbox } from '@chakra-ui/react'
import { ReactComponent as Calendar } from '../../icons/Calendar.svg'

const SelectComponent = () => {
	const [value, setValue] = React.useState('123')
	return (
		<Flex>
			<Box>
				<Text>{value}</Text>
				<Select
					placeholder='123'
					value={value}
					onChange={e => setValue(e.target.value)}
				>
					<option value='option1'>
						<Checkbox defaultChecked>Checkbox</Checkbox>
					</option>
					<option value='option2'>Option 2</option>
					<option value='option3'>Option 3</option>
				</Select>
				<Checkbox defaultChecked>Checkbox</Checkbox>
			</Box>
		</Flex>
	)
}

export default SelectComponent
