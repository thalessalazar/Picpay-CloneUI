import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 16px;
    margin-top: 20px;
`;

export const Header = styled.View`
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;


export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 18px;
    padding: 15px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`

`;

export const Description = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 15px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-top: 20px;
`;

export const UserName = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const CardFooter = styled.View`
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-between;
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 2px;
    height: 13px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 12px;
`;

export const Date = styled.Text`
    color: #fff;
    margin-left: 10px;

`;

export const Actions = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const Option = styled.TouchableOpacity`
    flex-direction: row;
    margin-left: 15px;
`;

export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-left: 5px;
`;
