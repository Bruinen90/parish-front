import React from 'react';

//Styles
import * as Styled from './stylesLogo';

// Icons
import LogoIcon from '../../icons/eucharist.inline.svg';

interface PropTypes {}

const Logo: React.FC<PropTypes> = () => (
	<Styled.Wrapper to="/">
		<Styled.LogoIcon>
			<LogoIcon />
		</Styled.LogoIcon>
		Parafia pod wezwaniem św. Brata Alberta w Krakowie
	</Styled.Wrapper>
);

export default Logo;
