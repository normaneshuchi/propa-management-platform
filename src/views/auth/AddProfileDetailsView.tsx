import { Avatar, Button, Grid, Group, Space, Text, useMantineTheme } from '@mantine/core'
import TopBorderContainer from '../../components/containers/TopBorderContainer'
import StyledRadioButton from '../../components/inputs/StyledRadioButton';
import StyledTextInput from '../../components/inputs/StyledTextInput';

type props = {
    action: () => void
}

function AddProfileDetailsView({action}: props) {
    const theme = useMantineTheme();
    return (
        <TopBorderContainer>
            <Grid >
                <Grid.Col p={16} sm={12} md={6}>
                    <Text weight={600} size='xl'>A few more details</Text>
                    <Space h='xl' />
                    <Text weight={600} color={theme.colors.gray[7]} size='md'>Upload your profile photo</Text>
                    <Space h='md' />
                    <Group >
                        <Avatar size={64} />
                        <Button variant='outline' color='gray'><Text color='dark'>Change</Text></Button>
                    </Group>
                    <Space h='xl' />
                    <Grid>
                        <Grid.Col sm={12} md={6}>
                            <StyledTextInput label="Postal Address" type="text" />
                        </Grid.Col>
                        <Grid.Col sm={12} md={6}>
                            <StyledTextInput label="Postal Code" type="number" />
                        </Grid.Col>
                        <Grid.Col sm={12} md={6}>
                            <StyledTextInput label="City" type="text" />
                        </Grid.Col>
                        <Grid.Col sm={12} md={6}>
                            <StyledTextInput label="Country" type="text" />
                        </Grid.Col>
                        <Grid.Col sm={12} >
                            <StyledTextInput label="National ID" type="text" />
                        </Grid.Col>
                        <Grid.Col sm={12} >
                            <StyledTextInput label="Kra Pin" type="text" />
                        </Grid.Col>
                    </Grid>
                    <Space h='md' />
                    <Group spacing='lg'>
                        <StyledRadioButton label='Individual' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                        <StyledRadioButton label='Company' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                    </Group>
                    <Space h='xl' />
                    <Button color='orange' onClick={action} fullWidth size='lg'>Proceed as Company</Button>
                </Grid.Col>
                <Grid.Col sx={{ backgroundColor: theme.colors.gray[2], height: '100vh' }} p='xl' sm={12} md={6}>
                    <Text size='md' weight={600} color='dark'>Why we collect this information</Text>
                    <Text size='md' color='dark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                    <Space h='xl' />
                    <Text size='md' weight={600} color='dark'>How we protect your privacy</Text>
                    <Text size='md' color='dark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>

                </Grid.Col>
            </Grid>
        </TopBorderContainer>
    )
}

export default AddProfileDetailsView