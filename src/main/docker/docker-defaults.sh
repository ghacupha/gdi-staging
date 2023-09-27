#!/usr/bin/env sh
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

set -eu

# Implementation of image configurations based on:
# https://stackoverflow.com/a/65529290/10330809
# As of version 1.19, the official Nginx Docker image supports templates with
# variable substitution.
# When we use the default.conf.template it is automatically replaced with default.conf
# which automatically replaces environment variables in the script.
# But that uses `envsubst`, which does not allow for
# defaults for missing variables. Here, first use the regular command shell
# to set the defaults:
export SERVER_API_DOCKER_DEPLOY_HOST=${SERVER_API_DOCKER_DEPLOY_HOST:-http://localhost}
export SERVER_API_DOCKER_DEPLOY_PORT=${SERVER_API_DOCKER_DEPLOY_PORT:-8980}
export CLIENT_MAX_FILE_SIZE=${CLIENT_MAX_FILE_SIZE:-50M}
export SERVER_NAME=${SERVER_NAME:-localhost}
# export NODE_OPTIONS=${NODE_OPTIONS:-"--max-old-space-size=8192"}

# Due to `set -u` this would fail if not defined and no default was set above
# shellcheck disable=SC2059
printf "\n\n Requests proxy configured for /* to ${SERVER_API_DOCKER_DEPLOY_HOST}:${SERVER_API_DOCKER_DEPLOY_PORT} /*"
#
#printf "\n\n Confirming template folder content... \n\n"
#
#ls -la /etc/nginx/conf.d

#printf "\n\n Reviewing the conf.template file... \n\n"
#cat /etc/nginx/conf.d/default.conf.template

envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

printf "\n\n"

while read -r line; do
# Reading each line
echo "$line"
done < /etc/nginx/conf.d/default.conf

printf "\n\n"

# Finally, let the original Nginx entry point do its work, passing whatever is
# set for CMD. Use `exec` to replace the current process, to trap any signals
# (like Ctrl+C) that Docker may send it:
exec /docker-entrypoint.sh "$@"
