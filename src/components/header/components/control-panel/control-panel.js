import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Button } from '../../../index';
import styled from 'styled-components';
import { ROLE } from '../../../../bff/constants';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';

export const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<div onClick={() => dispatch(logout(session))}>
							<Icon id="fa-sign-out" margin="0 0 0 10px" />
						</div>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<StyledBackIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</StyledBackIcon>
				<Link to="/post">
					<Icon id="fa-file-text-o" margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;

const StyledBackIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const RightAligned = styled.div`
	align-item: center;
	display: flex;
	justify-content: flex-end;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weigth: bold;
`;
