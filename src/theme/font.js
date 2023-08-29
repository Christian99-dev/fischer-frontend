import { css } from 'styled-components';
import { device } from './breakpoints';

export default css`
  :root {
		@media ${device.desktopXL} {
		--fs-6: 11px;
		--fs-5: 15px;
		--fs-4: 21px;
		--fs-3: 29px;
		--fs-2: 41px;
		--fs-1: 57px;
		}

		--fs-6: 12px;
		--fs-5: 16px;
		--fs-4: 21px;
		--fs-3: 28px;
		--fs-2: 37px;
		--fs-1: 49px;

		@media ${device.laptop} {
		--fs-6: 12px;
		--fs-5: 16px;
		--fs-4: 21px;
		--fs-3: 27px;
		--fs-2: 35px;
		--fs-1: 46px;
		}

		@media ${device.tablet} {
		--fs-6: 13px;
		--fs-5: 16px;
		--fs-4: 20px;
		--fs-3: 25px;
		--fs-2: 31px;
		--fs-1: 39px;
		}

		@media ${device.mobile} {
		--fs-6: 13px;
		--fs-5: 16px;
		--fs-4: 19px;
		--fs-3: 23px;
		--fs-2: 28px;
		--fs-1: 34px;
		}

  }
`;