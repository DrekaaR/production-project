import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps= Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { children, ...rest } = props;

    return (
        <Flex direction="column" {...rest}>
            {children}
        </Flex>
    );
};
