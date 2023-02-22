import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FC} from "react";
import TransitionSeries from "remotion-transition-series";
import FadeTransition from "remotion-transition-series/lib/components/FadeTransition";

export const TransitionTest: FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const bgColors = ["red", "blue"];
	const sequences = bgColors.map((color) => (
		[
			<TransitionSeries.Sequence durationInFrames={60}>
				<AbsoluteFill style={{backgroundColor: color}}/>
			</TransitionSeries.Sequence>
		,
			<TransitionSeries.Transition
				durationInFrames={30}
				transitionComponent={FadeTransition}
			/>
		]
	))
	return (
		<TransitionSeries>
			{sequences}
			<TransitionSeries.Sequence durationInFrames={60}>
				<AbsoluteFill style={{backgroundColor: "green"}}/>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
