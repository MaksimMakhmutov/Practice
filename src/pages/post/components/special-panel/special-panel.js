import styled from 'styled-components';
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				{' '}
				<Icon
					iconId="fa-calendar-o"
					margin="0 7px 0 0"
					size="18px"
					onClick={() => {}}
				/>
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon iconId="fa-trash-o" size="21px" onClick={() => {}} />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: ${({ margin }) => margin};
	justify-content: space-between;
	display: flex;

	& .buttons {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .published-at {
		display: flex;
		font-size: 18px;
	}
`;
