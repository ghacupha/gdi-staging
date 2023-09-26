#
# Erp System - Mark V No 5 (Ehud Series) Client 1.5.2
# Copyright © 2021 - 2023 Edwin Njeru (mailnjeru@gmail.com)
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#

# Stage 1
FROM node:16-alpine AS compile-image

WORKDIR /opt/app
# Enable the line below for in-container npm configurations
COPY .npmrc /opt/app
COPY package.json /opt/app
COPY package-lock.json /opt/app

COPY . /opt/app
RUN npm install
RUN npm install react-scripts@3.4.1 -g

ENV PATH="./node_modules/.bin:$PATH" \
    NODE_OPTIONS="--max-old-space-size=8192"

# add app
COPY . ./

# start app
CMD ["npm", "start"]
