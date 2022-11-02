import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from 'antd';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { registerReviewApi } from '../api/reviewApi';
import { loginCheck } from '../common/loginCheck'

function ReviewRegisterForm(props) {
    const jwtToken = loginCheck();
    const editorRef = React.useRef();

    useEffect( async () => {
        editorRef.current.getInstance().removeHook('addImageBlobHook');
    }, []);
    
    const onSubmitHandler = () => {
        const editorInstance = editorRef.current.getInstance();
        const requestBody = {
            studyId : props.studyId,
            content : editorInstance.getMarkdown()
        }
        registerReviewApi(requestBody, jwtToken);
    }

    const returnHtml = <ReviewFormContainer>
                    <h6>📝 리뷰 작성</h6>
                    <Editor
                        previewStyle="vertical" // 미리보기 스타일 지정
                        height="300px" // 에디터 창 높이
                        initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
                        toolbarItems={[
                            // 툴바 옵션 설정
                            ['heading', 'bold', 'italic', 'strike'],
                            ['hr', 'quote'],
                            ['ul', 'ol', 'task', 'indent', 'outdent'],
                            ['table', 'link'],
                            ['code', 'codeblock']
                        ]}
                        plugins={[colorSyntax]} 
                        useCommandShortcut={true}
                        ref={editorRef}></Editor>
                    <Button size='default' onClick={onSubmitHandler}>복습 등록</Button>
                    </ReviewFormContainer>                    
    return (<>{returnHtml}</>);
}

const ReviewFormContainer = styled.div`
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`

export default ReviewRegisterForm;