import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps= Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
    const { children, ...rest } = props;

    return (
        <Flex align="center" {...rest}>
            {children}
        </Flex>
    );
};
