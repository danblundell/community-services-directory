import React from "react"
import styled from "styled-components"
import theme from "../components/_theme"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Form from "../components/Form"

const Outer = styled.div`
    padding: 60px 15px;
`

const ContentArea = styled.div`
    max-width: ${theme.maxWidth};
    margin: 0px auto;
`

const TwoThirdsColumn = styled.div`
    max-width: calc(${theme.maxWidth} / 2 );
`

const IndexPage = () =>
    <Layout>
        <PageHeader/>
        <Outer>
            <ContentArea>
                <TwoThirdsColumn>
                    <Form/>
                </TwoThirdsColumn>
            </ContentArea>
        </Outer>
    </Layout>

export default IndexPage