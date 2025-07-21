import { useCallback, useMemo, useState } from 'react';
import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
} from 'react-icons/md';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import Color from '@tiptap/extension-color';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EmojiPicker from 'emoji-picker-react';

import styles from '@/pages/Message/ContentEditor.module.scss';

function ContentEditor({ value, onChange }) {
  const [showEmoji, setShowEmoji] = useState(false);

  const extensions = useMemo(
    () => [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
        blockquote: false,
        code: false,
        strike: false,
        underline: false,
        link: false,
      }),
      Underline,
      Strike,
      Code,
      Superscript,
      Subscript,
      TextAlign.configure({
        types: ['paragraph', 'heading', 'listItem'],
      }),
      Color,
      Link,
      Blockquote,
      BulletList,
      OrderedList,
      ListItem,
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    []
  );

  const editor = useEditor({
    extensions,
    content: value || '<p></p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    onCreate: () => {
      console.log('editor initialized');
    },
  });

  const toggleEmoji = useCallback(() => {
    setShowEmoji((prev) => !prev);
  }, []);

  if (!editor) return null;

  return (
    <div className={styles.editorWrapper}>
      <label htmlFor='texteditor' className={styles.label}>
        내용을 입력해 주세요
      </label>
      <div className={styles.wrapper}>
        <div className={styles.toolbar}>
          {/* 텍스트 스타일 */}
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            B
          </button>
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            I
          </button>
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            U
          </button>
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            S
          </button>
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleCode().run()}
          >
            {'{}'}
          </button>
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
          >
            x²
          </button>
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleSubscript().run()}
          >
            xₐ
          </button>

          {/* 블록 타입 */}
          <select
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'paragraph')
                editor.chain().focus().setParagraph().run();
              if (val === 'blockquote')
                editor.chain().focus().toggleBlockquote().run();
              if (val === 'code') editor.chain().focus().toggleCode().run();
            }}
            defaultValue=''
          >
            <option value='' disabled>
              Block Type
            </option>
            <option value='paragraph'>Normal</option>
            <option value='blockquote'>Blockquote</option>
            <option value='code'>Code</option>
          </select>

          {/* 리스트 */}
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            • List
          </button>
          <button
            type='button'
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            1. List
          </button>

          {/* 정렬 */}
          <div className={styles.alignButtons}>
            <button
              type='button'
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
            >
              <MdFormatAlignLeft size={20} />
            </button>
            <button
              type='button'
              onClick={() =>
                editor.chain().focus().setTextAlign('center').run()
              }
            >
              <MdFormatAlignCenter size={20} />
            </button>
            <button
              type='button'
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
            >
              <MdFormatAlignRight size={20} />
            </button>
          </div>

          {/* 링크 */}
          <button
            type='button'
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleLink({ href: 'https://google.com' })
                .run()
            }
          >
            🔗
          </button>

          {/* 이모지 */}
          <button type='button' onClick={toggleEmoji}>
            😊
          </button>
        </div>

        {showEmoji && (
          <div className={styles.emojiWrapper}>
            <EmojiPicker
              onEmojiClick={(emojiData) => {
                editor.chain().focus().insertContent(emojiData.emoji).run();
              }}
            />
          </div>
        )}
        {/* 에디터 영역 */}
        <div
          className={styles.editorContentWrapper}
          role='textbox'
          tabIndex={0}
          onClick={() => editor.commands.focus()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              editor.commands.focus();
            }
          }}
        >
          <EditorContent
            id='texteditor'
            editor={editor}
            className={styles.editorContent}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentEditor;
