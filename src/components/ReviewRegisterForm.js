import React, { useState } from 'react'
import styled from 'styled-components'
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

function ReviewRegisterForm() {

    const editorRef = React.useRef();

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
                            ['table', 'image', 'link'],
                            ['code', 'codeblock']
                        ]}
                        plugins={[colorSyntax]} 
                        useCommandShortcut={true}
                        ref={editorRef}
                    ></Editor>
                    <Button size='default'>등록</Button> <Button size='default'>취소</Button>
                    </ReviewFormContainer>

    return (<>{returnHtml}</>);
}

const ReviewFormContainer = styled.div`
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`

export default ReviewRegisterForm;