#!/bin/bash
# run from the content
TEXT=
TEMPL=./scripts/
DIST=./dist/
CONTENT=./content/
TITLE="Code Right"

# This wraps lines and adds line number...
#     --listings -H ${TEMPL}listings-setup.tex \

#FILES=${TEXT}prologue.md ${TEXT}level1.md ${TEXT}level7.md
pandoc --template=${TEMPL}plantilla-kdp.latex \
    -V language=spanish -V lang=spanish \
    -V author='Pello Xabier Altadill Izura' -V title='Code Right'\
    -V documentclass=book\
    -S --latex-engine=xelatex  \
    -o ${DIST}code-right.pdf  \
    ${CONTENT}prologue.md \
    ${CONTENT}00.language.md \
    ${CONTENT}references.md \
            --toc
