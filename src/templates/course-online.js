import React, {useState, useEffect, useContext, useRef} from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';
import {Card} from '../components/Card'
import {Container, Row, Column, Wrapper, Divider, Sidebar, Div} from '../components/Sections'
import {Title, Paragraph} from '../components/Heading'
import {Button, Colors, Check, ArrowRight, Circle, RoundImage, Utensils, Coffee, Dumbbell, LaptopCode, FileCode} from '../components/Styling'
import GeeksVsOthers from '../components/GeeksVsOthers'
import { navigate } from "@reach/router"
import PricesAndPayment from '../components/PricesAndPayment'
import AlumniProjects from '../components/AlumniProjects'
import BaseRender from './_baseRender'
import ProgramSelector from '../components/ProgramSelector'
import {requestSyllabus} from "../actions";
// import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import LeadForm from "../components/LeadForm/index.js";
import ProgramDetails from '../components/ProgramDetails';
import SyllabusSVG from "../assets/images/syllabus.inline.svg";

// import Modal from '../components/Modal';
// import SimpleModal from '../components/SimpleModal';

const Program = ({data, pageContext, yml}) => {

  const geek = data.allCourseYaml.edges[0].node;
  const [open, setOpen] = React.useState(false);

  return (<>

    <Wrapper
      github="/course"
      style="default"
      imageData={yml.header.image && yml.header.image.childImageSharp.fluid}
      className={`img-header`}
      height={`600px`}
      bgSize={`cover`}
      alt={yml.header.alt}
    >
      <Title
        size="5"
        title={yml.header.tagline}
        main
        marginTop="170px"
        color={Colors.white}
        fontSize="46px"
        textAlign="center"

      />
      <Row align="center">
        <Column align="right" size="6">
          <Button
            onClick={() => navigate(yml.button.apply_button_link)}
           width="200px" color="red" margin="15px 0" textColor=" white">{yml.button.apply_button_text}</Button>
          </Column>
        <Column align="left" size="6">
          <Button width="200px" onClick={() => setOpen(true)} color={Colors.blue} margin="15px 0" textColor=" white">{yml.button.syllabus_button_text}</Button>
        </Column>
      </Row>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <LeadForm heading="Request Syllabus" formHandler={requestSyllabus} handleClose={() => setOpen(false)} />
      </Modal>
    </Wrapper>

    <ProgramDetails details={yml.details} />

    <Wrapper
      style="default"
    >
      <section className="section" id="section-3"></section>
      <Title
        size="10"
        title={yml.geeks_vs_others.heading}
        paragraph={yml.geeks_vs_others.sub_heading}
        primary
      />
      <Divider height="50px" />
      <GeeksVsOthers lang={data.allGeeksVsOthersYaml.edges} />
      <Divider height="100px" />
    </Wrapper>

    

      <Row height="100%">
        <Column size="12">
          <SyllabusSVG />
        </Column>
      </Row>
    {/* SVG  END*/}
    <Divider height="100px" />

    {/* GEEKPAL && GEEKFORCE SECTION */}
    {/* ---------------------------- */}
    <section className="section" id="section-1"></section>
    <Container fluid>
      <Row>
        <Column size="2">
        </Column>
        <Column size="8">
          <Row >
            <Column size="6" paddingLeft={`0`}>
              <Card
                h_xs="400px"
                h_sm="370px"
                h_md="470px"
                h_lg="470px"
                h_xl="470px"
                padding="20px"
                shadow height="400px"
                width="100%"
                margin="10px 0px"
                move="up"
                up="100px">
                <Row height="100%">
                  <Column size="10" customRespSize respSize="10" display={`flex`} flexDirection={`column`} justifyContent={`space-between`}>
                    <Div flexDirection={`column`} height={`20%`} justifyContent={`space-between`}>
                      <Row marginLeft="0px" height={`70%`} >
                        <RoundImage url="/images/geekpal.png" bsize="contain" height="100%" position="left" />
                      </Row>
                      <Row height={`20%`}>
                        <Column size="12">
                          <Paragraph
                            fs_xs="10px"
                            fs_sm="10px"
                            fs_md="11px"
                            fs_lg="12px"
                            fs_xl="16px"
                            color={Colors.black}
                            customTextAlignSmall
                            alignXs="left">
                            {geek.geek_data.geek_pal_heading}
                          </Paragraph>
                        </Column>
                      </Row>
                    </Div>
                    <Div flexDirection={`column`} height={`80%`} justifyContent={`space-between`}>
                      <Row marginTop="15px" height={`100%`}>
                        <Column size="12" display={`flex`} flexDirection={`column`} justifyContent={`space-evenly`}>
                          {geek.geek_data.geek_pal.map((pal, index) => {
                            return (
                              <Row key={index} marginBottom="4px">
                                <Column size="1" customRespSize respSize="1" alignSelf="center">
                                  <Check width="12px" color={Colors.yellow} fill={Colors.yellow} />
                                </Column>
                                <Column size="8" customRespSize respSize="8" test paddingRight="0px" paddingLeft="5px" alignSelf="center">
                                  <Paragraph
                                    fs_xs="10px"
                                    fs_sm="10px"
                                    fs_md="12px"
                                    fs_lg="12px"
                                    fs_xl="14px"
                                    color={Colors.gray}>{pal}</Paragraph>
                                </Column>
                              </Row>
                            )
                          })}
                        </Column>
                      </Row>
                    </Div>
                  </Column>
                  <Column size="2" customRespSize respSize="2" alignSelf="flex-end">
                    <Link to={`/${pageContext.lang}/geekpal`}>
                      <ArrowRight width="24px" color={Colors.yellow} fill={Colors.yellow} />
                    </Link>
                  </Column>
                </Row>
              </Card>
            </Column>
            <Column size="6" paddingRight={`0`}>
              <Card
                h_xs="400px"
                h_sm="400px"
                h_md="470px"
                h_lg="470px"
                h_xl="470px"
                padding="20px"
                shadow
                height="400px"
                width="100%"
                margin="10px 0px"
                move="up"
                up="100px">
                <Row height="100%">
                  <Column size="10" customRespSize respSize="10" display={`flex`} flexDirection={`column`} justifyContent={`space-between`}>
                    <Div flexDirection={`column`} height={`20%`}>
                      <Row marginLeft="0px" height={`70%`}>
                        <RoundImage url="/images/geekforce.png" bsize="contain" height="100%" position="left" />
                      </Row>
                      <Row height={`20%`}>
                        <Column size="12">
                          <Paragraph fontSize="16px" color={Colors.black} customTextAlignSmall
                            alignXs="left">
                            {geek.geek_data.geek_force_heading}
                          </Paragraph>
                        </Column>
                      </Row>
                    </Div>
                    <Div flexDirection={`column`} height={`80%`} justifyContent={`space-between`}>
                      <Row marginTop="15px" height={`100%`}>
                        <Column size="12" display={`flex`} flexDirection={`column`} justifyContent={`space-evenly`}>
                          {geek.geek_data.geek_force.map((pal, index) => {
                            return (
                              <Row key={index} marginBottom="2px" >
                                <Column size="1" customRespSize respSize="1" alignSelf="center">
                                  <Check width="12px" color={Colors.yellow} fill={Colors.yellow} />
                                </Column>
                                <Column size="8" customRespSize respSize="8" paddingRight="0px" paddingLeft="5px" alignSelf="center">
                                  <Paragraph fs_xs="10px"
                                    fs_sm="10px"
                                    fs_md="11px"
                                    fs_lg="12px"
                                    fs_xl="14px" color={Colors.gray}>{pal}</Paragraph>
                                </Column>
                              </Row>
                            )
                          })}
                        </Column>
                      </Row>
                    </Div>
                  </Column>
                  <Column size="2" customRespSize respSize="2" alignSelf="flex-end">
                    <Link to={`/${pageContext.lang}/geekforce`}>
                      <ArrowRight width="24px" color={Colors.yellow} fill={Colors.yellow} />
                    </Link>
                  </Column>
                </Row>
              </Card>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>

    <Divider height="100px" />

    <Wrapper
      style="default"
      github="/course"
    >


      <Title
        size="10"
        title={yml.prices.heading}
        paragraph={yml.prices.sub_heading}
        primary
      />
      <section className="section" id="section-4"></section>
      <PricesAndPayment type={pageContext.slug} lang={data.allLocationYaml.edges} />
      <Divider height="100px" />
    </Wrapper>

    {/* {yml.meta_info.slug === "full-stack-web-development-bootcamp-full-time" || yml.meta_info.slug === "desarrollo-web-full-stack-bootcamp-full-time" ?
      <TypicalDay data={yml.typical} />

      : null} */}

    <Divider height="100px" />
    <Wrapper
      style="default"
    >
      <Title
        size="10"
        title={yml.alumni.heading}
        paragraph={yml.alumni.sub_heading}
        customParagraphSize="8"
        primary
      />
      <Divider height="50px" />
      <section className="section" id="section-5"></section>
      <AlumniProjects hasTitle lang={data.allAlumniProjectsYaml.edges} />
      <Divider height="100px" />
    </Wrapper>
    <Divider height="100px" />
    {/* </div> */}
  </>
  )
};

export const query = graphql`
  query CourseOnlineQuery($file_name: String!, $lang: String!) {
    allCourseYaml(filter: { fields: { file_name: { eq: $file_name }, lang: { eq: $lang }}}) {
      edges{
        node{
            header{
              tagline
              image {
                childImageSharp {
                  fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            alt
            }
            button{
              syllabus_button_text
              syllabus_submit_text
              apply_button_text
              apply_button_link
            }
            meta_info{
                title
                description
                image
                keywords
                slug
            }
            geek_data {
              geek_force
              geek_pal
              geek_pal_heading
              geek_force_heading
            }
            details {
              heading
              sub_heading
              left_labels{
                description
                projects
                duration
                skills
              }
              details_modules {
                title
                projects
                slug
                module_name
                duration
                description
                step
              }
            }
            geeks_vs_others{
              heading
              sub_heading
              sub_heading_link
          }
            prices{
              heading
              sub_heading
            }
            typical{
              heading
              sub_heading
              schedule{
                title
                time
                icon
                content
              }
            }
            alumni{
              heading
              sub_heading
            }
            sidebar{
              membership
              program
              geeks_vs_other
              pricing
              alumni
            }
        }
      }
    }
    allAlumniProjectsYaml(filter: {lang: {eq: $lang}}){
      edges {
        node {
          header{
            tagline
            sub_heading
            button_text
          }
          projects {
              project_name
              slug
              project_image{
                  image {
                      childImageSharp {
                        fluid(maxWidth: 800){
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    } 
                  image_alt
              }
              project_content
              project_video
              live_link
              github_repo
              alumni {
                first_name
                last_name
                job_title
                github
                linkedin
                twitter
              }
            }
          button_section{
            button_text
            button_link
          }
        }
      }
    }
    allCredentialsYaml(filter: {lang: {eq: $lang}}) {
      edges {
        node {
          lang
          credentials {
            title
            slug
            value
            symbol
            symbol_position
          }
        }
      }
    }
    allGeeksVsOthersYaml(filter: {lang: {eq: $lang}}) {
      edges {
        node {
          lang
          
          info {
            features
            at4_Geeks
            industry_average
            tooltip
            icon
            slug
          }
          globe_text
          titles{
              featured
              at_geeks
              average
          }
          button{
              button_text
              button_link
          }
        }
      }
    }
    allLocationYaml(filter: {fields: { lang: {eq: $lang}}, meta_info: { unlisted: {ne: true }}}){
      edges {
        node {
          id
          city
          hasFinancialsOption
          financials_max_months
          fields{
            lang
          }
          meta_info {
            slug
            description
            image
            position
            unlisted
            keywords
            redirects
          }
          header{
            sub_heading
            tagline
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            } 
          }
          
          prices {
            full_time {
              center_section {
                button {
                  button_text
                }
                header {
                  sub_heading
                  heading_one
                  heading_two
                }
                plans {
                  months
                  payment
                  paymentInfo
                  provider
                  logo
                  message
                }
              }
              left_section {
                button {
                  button_text
                }
                content {
                  price
                  price_info
                }
                header {
                  heading_one
                  heading_two
                  sub_heading
                }
              }
              right_section {
                button {
                  button_text
                }
                content {
                  price
                  price_info
                }
                header {
                  sub_heading
                  heading_one
                  heading_two
                }
              }
            }
            part_time {
              center_section {
                button {
                  button_text
                }
                header {
                  heading_two
                  sub_heading
                  heading_one
                }
                plans {
                  months
                  payment
                  paymentInfo
                  provider
                  logo
                  message
                }
              }
              left_section {
                button {
                  button_text
                }
                content {
                  price
                  price_info
                }
                header {
                  heading_one
                  sub_heading
                  heading_two
                }
              }
              right_section {
                button {
                  button_text
                }
                content {
                  price
                  price_info
                }
                header {
                  heading_one
                  sub_heading
                  heading_two
                }
              }
            }
          }
          
        }
      }
    }
  }
`;



const Header = styled.div`
    background: black;
    border-radius: 1.25rem 1.25rem 0 0;
    height: ${props => props.height};
    color: white;
    font-family: 'lato', sans-serif;
    font-size: 14px;
    font-weight: 800;
    align-items: center;
`;
const Body = styled.div`
    background: white;
    height: ${props => props.height};
    border-radius: 0 0 1.25rem 1.25rem;`

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 5,
    left: 'calc(-50% + 5px)',
    right: 'calc(50% + 5px)',
    color: 'black'
  },
  active: {
    '& $line': {
      borderColor: Colors.white,
    },
  },
  completed: {
    '& $line': {
      borderColor: Colors.yellow,
    },
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: Colors.blue,
  },
  line: {
    borderColor: 'white',
    borderTopWidth: 1,
    borderRadius: 1,
  },
})(StepConnector);
const useQontoStepIconStyles = makeStyles({
  root: {
    color: 'black',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: Colors.blue,
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});
function QontoStepIcon (props) {
  const classes = useQontoStepIconStyles();
  const {active, completed} = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: Colors.yellow,
    width: 12,
    height: 12,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: Colors.yellow
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon (props) {
  const classes = useColorlibStepIconStyles();
  const {active, completed} = props;

  const icons = {
    1: <Circle width="32" color={Colors.yellow} fill={Colors.yellow} />,
    2: <Circle width="32" color={Colors.yellow} fill={Colors.yellow} />,
    3: <Circle width="32" color={Colors.yellow} fill={Colors.yellow} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps (day) {
  return [
    {icon: <Circle width="32" color={Colors.yellow} fill={Colors.yellow} />, time: day.typical.schedule[0].time},
    {icon: <Coffee width="32" color={Colors.yellow} fill={Colors.yellow} />, time: day.typical.schedule[1].time},
    {icon: <FileCode width="32" color={Colors.yellow} fill={Colors.yellow} />, time: day.typical.schedule[2].time},
    {icon: <LaptopCode width="32" color={Colors.yellow} fill={Colors.yellow} />, time: day.typical.schedule[3].time},
    {icon: <Utensils width="32" color={Colors.yellow} fill={Colors.yellow} />, time: day.typical.schedule[4].time},
    {icon: <Dumbbell width="32" color={Colors.yellow} fill={Colors.yellow} />, time: day.typical.schedule[5].time},
  ];
}
export default BaseRender(Program);