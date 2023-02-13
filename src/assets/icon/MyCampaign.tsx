import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../constant';

export const MyCampaign = React.memo((props: string | number) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.07 11.517c-.004-.005-.005-.01-.01-.014L8.882 7.49V4.97a.689.689 0 00-.215-.497L4.272.206a.755.755 0 00-.798-.152.703.703 0 00-.452.65v2.108H.775a.732.732 0 00-.676.434.682.682 0 00.159.767L4.7 8.278a.748.748 0 00.518.206h2.626l4.18 4.013c.004.004.01.005.014.01a.742.742 0 001.008 0 .674.674 0 00.023-.99z"
        fill={props.color ? props.color : Colors?.placeHolderTextBlack}
      />
      <Path
        d="M12.543 0C10.669 0 8.897.458 7.3 1.173L9.548 3.33a9.829 9.829 0 012.995-.47c5.25 0 9.521 4.1 9.521 9.14 0 5.04-4.271 9.14-9.521 9.14-5.25 0-9.522-4.1-9.522-9.14 0-1.005.177-1.97.49-2.875L1.265 6.968C.52 8.5.043 10.201.043 12c0 6.591 5.634 12 12.5 12s12.5-5.409 12.5-12-5.634-12-12.5-12z"
        fill={props.color ? props.color : Colors?.placeHolderTextBlack}
      />
      <Path
        d="M12.543 5.672c-.774 0-1.507.152-2.197.389v.847l1.693 1.625c.166-.022.331-.049.504-.049 2.02 0 3.662 1.578 3.662 3.516s-1.643 3.516-3.662 3.516c-2.02 0-3.662-1.578-3.662-3.516 0-.166.028-.324.05-.484L7.24 9.891h-.883c-.246.663-.405 1.366-.405 2.109 0 3.49 2.957 6.328 6.592 6.328S19.135 15.49 19.135 12s-2.957-6.328-6.592-6.328z"
        fill={props.color ? props.color : Colors?.placeHolderTextBlack}
      />
    </Svg>
  );
});
