/**
 * 在线kaos
 */

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import OnlineExamIndex from './OnlineExamIndex';
import OnlineExamPaper from './OnlineExamPaper';
import OnlineExamRecord from './OnlineExamRecord';

const OnlineExam = ({ location, match }) => (
    <Switch location={location}>
        <Route path={match.url} exact component={OnlineExamIndex} />
        <Route path={match.url + '/record/:ExamId'} exact component={OnlineExamRecord} />
        <Route path={match.url + '/:ExamId'} exact component={OnlineExamPaper} />
    </Switch>
)

export default OnlineExam