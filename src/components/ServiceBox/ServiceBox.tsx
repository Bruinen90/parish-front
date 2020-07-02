import React from 'react';

//Styles
import * as Styled from './stylesServiceBox';

const ServiceBox = () => (
	<Styled.Wrapper>
		<Styled.PictureBox>
			<img src="https://images.pexels.com/photos/236339/pexels-photo-236339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
		</Styled.PictureBox>
		<Styled.TextBox>
			<Styled.TimeStrap>18:00 - 19:00</Styled.TimeStrap>
			<Styled.Text>
				<Styled.ServiceName>Nabożeństwa różańcowe</Styled.ServiceName>
				<Styled.Description>
					Selfies lumbersexual tumeric, af wolf leggings la croix
					fanny pack food truck pickled gochujang. Vape poke aesthetic
					organic, seitan 8-bit brooklyn plaid kogi vexillologist
					succulents fashion axe celiac keytar.
				</Styled.Description>
			</Styled.Text>
		</Styled.TextBox>
	</Styled.Wrapper>
);

export default ServiceBox;
