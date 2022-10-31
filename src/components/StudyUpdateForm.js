import React, { useState } from 'react'
import styled from 'styled-components'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'antd';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import moment from 'moment';
import { updateStudyApi } from '../api/studyApi';
import { uploadImageApi } from '../api/fileApi';
import { loginCheck } from '../common/loginCheck'

function StudyForm(props) {
    const jwtToken = loginCheck();
    const study = props.study;
    
    const [title, setTitle] = useState(study.title);
    const [category, setCategory] = useState(study.category);
    const [notiDate, setNotiDate] = useState("0");

    const editorRef = React.useRef();

    const onTitleHandler = (e) => {
        setTitle(e.currentTarget.value);
    }
    const onCategoryHandler = (e) => {
        setCategory(e.currentTarget.value);
    }
    const onNotiDateHanlder = (e) => {
        setNotiDate(e.target.value);
    }
    const onSubmitHandler = () => {
        const editorInstance = editorRef.current.getInstance();
        const id = study.id;
        const requestBody = {
            id: id,
            title: title,
            category: category,
            notiDate: notiDate,
            content: editorInstance.getMarkdown()
        }
        updateStudyApi(id, requestBody, jwtToken);
    }

    function Notification(){
        return (
            <FloatingLabel controlId="floatingSelect" label="복습일 선택" className="mb-3">
                <Form.Select onChange={onNotiDateHanlder} value={notiDate} aria-label="">
                    <option value="0">---복습일 선택---</option>
                    <option value="1">3일 후 알림</option>
                    <option value="2">일주일 후 알림</option>
                    <option value="3">이주일 후 알림</option>
                    <option value="4">한 달 후 알림</option>
                    <option value="5">두 달 후 알림</option>
                    <option value="6">세 달 후 알림</option>
                </Form.Select>
            </FloatingLabel>
        );
    }

    const onUploadImage = async(blob, callback) => {
        // 1. 첨부된 이미지 파일을 서버로 전송 후, 이미지 경로 url을 받아온다
        const data = await uploadImageApi(blob, jwtToken);
        const imgUrl = data['domain'] + "/" + data['path'];

        // 2. 첨부된 이미지를 화면에 표시  
        callback(imgUrl, 'image');
    }

    const returnHtml = <StudyFormContainer>
                            <>
                            <h4>스터디 수정</h4> 
                            <FloatingLabel controlId="floatingInput" label="제목" className="mb-3">
                                <Form.Control value={title} onChange={onTitleHandler} type="text" placeholder="제목을 입력하세요." />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="분류" className="mb-3">
                                <Form.Control value={category} onChange={onCategoryHandler} type="text" placeholder="분류를 입력하세요." />
                            </FloatingLabel>
                            <p >📆 기존 복습 예정일: {study.notiDate == null ? '복습 예정일이 등록되지 않았습니다.' : moment(study.notiDate).format('YYYY-MM-DD HH:mm')} </p>
                            <Notification value={notiDate}></Notification>
                            <Editor
                                previewStyle="vertical" // 미리보기 스타일 지정
                                height="600px" // 에디터 창 높이
                                initialValue={study.content}
                                initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
                                toolbarItems={[
                                    // 툴바 옵션 설정
                                    ['heading', 'bold', 'italic', 'strike'],
                                    ['hr', 'quote'],
                                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                                    ['table', 'image', 'link'],
                                    ['code', 'codeblock']
                                ]}
                                hooks= {{
                                    addImageBlobHook: onUploadImage }}
                                plugins={[colorSyntax]} 
                                useCommandShortcut={true}
                                ref={editorRef}
                                ></Editor>
                            <Button onClick={onSubmitHandler} size='default'>수정</Button>
                            </>
                        </StudyFormContainer>
    return (<>{returnHtml}</>);
    
}

const StudyFormContainer = styled.div`
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`

export default StudyForm;